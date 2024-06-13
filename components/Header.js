import Link from 'next/link';
import Image from 'next/image'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <Image className='w-100 h-100 mx-auto rounded-full' src='/images/reallymad.png' alt='Profile Picture' />
        </Link>
      </p>
    </header>
  );
}
