import Typewriter from 'typewriter-effect';
import { CustomButton } from '../components/common/Button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-10 text-4xl">
        Welcome to{' '}
        <span className="text-6xl text-[#007a7a] pt-20">
          <Typewriter
            options={{
              strings: [
                'Niogalia',
                'Exhibiting Excellence',
                'Online Store',
                'E-commerce Store',
                'Click ⬇ ',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>

      <CustomButton text="Homepage" link="home" />
    </div>
  );
}
