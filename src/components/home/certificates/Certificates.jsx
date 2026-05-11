import Heading from '@/components/shared/heading/Heading';
import { Wrapper } from '@/components/shared/wrapper';
import { certificates } from '@/constants/career';

const Certificates = () => {
  return (
    <div id="certificates" className="div-container w-full py-20 px-3 lg:px-0">
      <Wrapper>
        <div className="flex flex-col justify-center items-center w-full">
          <Heading tag="h1" text="Certificates" styleType="h1" />
          <Heading tag="h2" text="Training and formal achievements" styleType="h2" />

          <div className="w-full mt-8 xl:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {certificates.map((certificate) => (
              <article
                key={`${certificate.title}-${certificate.institution}`}
                className="border border-primary-white/10 rounded-2xl p-5 xl:p-7 hover:border-primary-white/20 transition-all duration-200"
              >
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h3 className="text-primary-white text-2xl font-semibold">{certificate.title}</h3>
                    <p className="text-secondary-text text-lg">{certificate.institution}</p>
                    <p className="text-primary-white/70 text-base mt-1">Certificate</p>
                  </div>
                  <span className="text-primary-green text-lg font-medium whitespace-nowrap">{certificate.period}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Certificates;
