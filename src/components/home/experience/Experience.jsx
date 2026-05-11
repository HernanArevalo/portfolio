import Heading from '@/components/shared/heading/Heading';
import { Wrapper } from '@/components/shared/wrapper';
import { workExperience } from '@/constants/career';

const Experience = () => {
  return (
    <div id="experience" className="div-container bg-primary-gray w-full py-20 px-3 lg:px-0">
      <Wrapper>
        <div className="flex flex-col justify-center items-center w-full">
          <Heading tag="h1" text="Work Experience" styleType="h1" />
          <Heading tag="h2" text="Professional journey and impact" styleType="h2" />

          <div className="w-full mt-8 xl:mt-14 space-y-6">
            {workExperience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="border border-primary-white/10 rounded-2xl p-5 xl:p-7">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-primary-white text-2xl font-semibold">{item.role}</h3>
                    <p className="text-secondary-text text-lg">{item.company}</p>
                  </div>
                  <span className="text-primary-green text-lg font-medium">{item.period}</span>
                </div>

                <ul className="mt-4 space-y-2 list-disc list-inside text-secondary-text text-lg">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                {item.highlights && (
                  <p className="mt-4 text-secondary-text text-lg">
                    <span className="text-primary-white font-semibold">Featured projects: </span>
                    {item.highlights.join(' | ')}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Experience;
