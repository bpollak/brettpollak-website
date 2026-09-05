import { speakerBio } from '@/lib/speakerBio';
export const dynamic = 'force-static';
export function GET() {
  return new Response(`Brett Pollak\n\n${speakerBio}\n\nhttps://brettcpollak.com/speaking\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
