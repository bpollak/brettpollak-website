const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('fs');const assert=require('assert/strict');
const dest=process.env.SITE_SCREENSHOT_DIR || '/tmp/site-review-screenshots';fs.mkdirSync(dest,{recursive:true});
const repo=process.cwd();
const base=process.env.SITE_PREVIEW_URL || 'http://127.0.0.1:3017';
const routes=['/','/about/','/work/','/speaking/','/contact/','/products/','/media/','/now/','/tritongpt/','/ai-agent-architecture/','/ai-digest/','/ucsd-ai-news/','/ai-digest/2026-09-05/','/ucsd-ai-news/2026-08-31/','/products/cason-recruiting-crm/','/products/cason-scholarship-agent/','/podcasts/','/linkedin/'];
(async()=>{
const b=await chromium.launch({headless:true}); const results=[];
for(const width of [390,768,820,1024,1440]){
const context=await b.newContext({viewport:{width,height:844},deviceScaleFactor:1,reducedMotion:'reduce'});
// Avoid sending analytics from a private local review.
await context.route(/google-analytics\.com|googletagmanager\.com/,r=>r.abort());
for(const route of routes){
const p=await context.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));
const response=await p.goto(base+route,{waitUntil:'load'});await p.evaluate(()=>document.fonts.ready);
// Hydration also renders the contact form behind its static Suspense boundary.
if(route==='/contact/')await p.getByLabel('Name *',{exact:true}).waitFor();
const data=await p.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,h1:[...document.querySelectorAll('h1')].map(x=>x.innerText),canonical:document.querySelector('link[rel="canonical"]')?.href,selectedWork:document.querySelector('#selected-work')?.getBoundingClientRect().top,ctaBottom:document.querySelector('main .button-primary')?.getBoundingClientRect().bottom,jsonld:[...document.querySelectorAll('script[type="application/ld+json"]')].map(x=>JSON.parse(x.textContent))}));
const checks={http:response.status()===200,overflow:data.scrollWidth<=width,h1:data.h1.length===1,canonical:data.canonical==='https://brettcpollak.com'+(route==='/'?'/':route.replace(/\/$/,'')),noRuntimeErrors:errors.length===0};
if(route==='/'&&width===390){checks.homeActions=data.ctaBottom<844;checks.selectedWork=data.selectedWork<1688;}
const structuredDataBlocks=data.jsonld.length;delete data.jsonld;
results.push({route,width,...data,structuredDataBlocks,errors,checks});
if([390,1440].includes(width)&&['/','/work/','/speaking/','/products/','/media/','/ai-digest/','/ucsd-ai-news/','/ucsd-ai-news/2026-08-31/','/ai-agent-architecture/'].includes(route)){
for(const img of await p.locator('main img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(x=>x.complete||new Promise(resolve=>{x.onload=resolve;x.onerror=resolve}));}
await p.evaluate(()=>scrollTo(0,0));const slug=route==='/'?'home':route.replaceAll('/','-').replace(/^-|-$/g,'');
await p.screenshot({path:`${dest}/${slug}-${width}.png`,fullPage:true});
if(route==='/')await p.screenshot({path:`${dest}/home-viewport-${width}.png`});
}
await p.close();
}
console.log(JSON.stringify({width,pages:routes.length,failures:results.filter(x=>x.width===width&&Object.values(x.checks).some(v=>!v)).map(x=>({route:x.route,checks:x.checks,errors:x.errors,width:x.scrollWidth}))}));
await context.close();
}
fs.writeFileSync(repo+'/docs/responsive-results.json',JSON.stringify(results,null,2));console.log('Saved responsive results and screenshots.');await b.close();
assert.equal(results.filter(x=>Object.values(x.checks).some(v=>!v)).length,0,'Responsive acceptance failures');
})().catch(e=>{console.error(e);process.exit(1)});
