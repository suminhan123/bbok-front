import { Button } from '@components/buttons';
import Link from 'next/link';

import LandingSection from './section';

export default function LandingPage() {
  return (
    <main className="relative flex h-screen flex-col items-center">
      <div className="h-screen w-full overflow-scroll">
        <LandingSection
          bg="bg-yellow"
          title="가시같은 친구를 등록하고<br />일화를 작성하세요"
          image="/images/landing/landing-1.png"
        />

        <LandingSection
          bg="bg-orange-5"
          title="나만의 친구 기준으로<br />친구와 있었던 일을 체크해요"
          image="/images/landing/landing-2.png"
        />

        <LandingSection
          bg="bg-yellow"
          title="친구와 나의 거리를<br />확인해보세요"
          image="/images/landing/landing-3.png"
        />

        <LandingSection
          bg="bg-orange-5"
          title="그날의 감정을 기록하고<br />생각을 정리해요"
          image="/images/landing/landing-4.png"
        />
      </div>

      <Link href="/login" className="absolute bottom-6 w-[calc(100%-48px)]">
        <Button text="일기쓰러 가기" size="medium" />
      </Link>
    </main>
  );
}
