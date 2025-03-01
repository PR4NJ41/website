import React from 'react';
import Container from '../../components/layout/Container';
import Hero from '../../components/Hero';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import Sponsors from '../../components/sponsors/Sponsors';
import Head from '../../components/Head';
import Slack from '../../components/slack';
import Button from '../../components/buttons/Button';
import Calendar from '../../components/Calendar';
import AdidasLogo from '../../components/logos/Adidas';
import AxwayLogo from '../../components/logos/Axway';
import SlackLogo from '../../components/logos/Slack';
import SalesforceLogo from '../../components/logos/Salesforce';
import SapLogo from '../../components/logos/SAP';
import Testimonial from '../../components/Testimonial';
import Heading from '../../components/typography/Heading';
import Paragraph from '../../components/typography/Paragraph';
import TextLink from '../../components/typography/TextLink';
import GoldSponsors from '../../components/sponsors/GoldSponsors';
import SilverSponsors from '../../components/sponsors/SilverSponsors';
import SupportUs from '../../components/SupportUs/SupportUs';
import GoogleCalendarButton from '../../components/buttons/GoogleCalendarButton';
import ICSFileButton from '../../components/buttons/ICSFileButton';
import SubscribeButton from '../../components/buttons/SubscribeButton';
import NewsroomSection from '../../components/newsroom/NewsroomSection';
import {
  getAllLanguageSlugs,
  getLanguage,
  useTranslation
} from "../../lib/i18n";

function HomePage() {

  const { t } = useTranslation('landing-page');

  return (
    <>
      <Head />
      <main id="main-content" className="scroll-mt-5">
        <Container wide>
          <Hero className="mb-24" />
        </Container>

        <Container className="text-center pb-12" wide as="section">
          <Heading level="h3" typeStyle="heading-lg" className="mb-4">
            {t('adopters.title')}
          </Heading>
          <Paragraph className="mt-2 mb-20 md:w-2/3 md:mx-auto">
            {t('adopters.description')}
            <TextLink href="https://github.com/asyncapi/website/issues/new" target="_blank">
              {t('adopters.linkText')}
            </TextLink>
          </Paragraph>
          <ul className="md:grid md:gap-8 md:grid-cols-2 lg:grid-cols-5">
            <li className="justify-center flex">
              <AdidasLogo className="h-8 text-gray-400 hover:text-black" />
            </li>
            <li className="justify-center flex">
              <AxwayLogo className="mt-12 md:-mt-5 lg:-mt-5 h-14 text-gray-400 group hover:text-black" />
            </li>
            <li className="justify-center flex">
              <SlackLogo className="mt-12 md:mt-2 lg:-mt-1 h-10 text-gray-400 hover:text-black group" />
            </li>
            <li className="justify-center flex">
              <SalesforceLogo className="mt-12 md:mt-2 lg:-mt-4 h-16 text-gray-400" />
            </li>
            <li className="justify-center flex">
              <SapLogo className="mt-12 md:mt-2 lg:-mt-2 h-12 text-gray-400" />
            </li>
          </ul>
        </Container>

        <div className="bg-dark py-12 mt-8">
          <Container wide as="section">
            <NewsletterSubscribe dark />
          </Container>
        </div>

        <Container className="text-center py-12" wide as="section">
          <Heading level="h3" typeStyle="heading-lg" className="mb-4">
            {t('community.title')}
          </Heading>
          <Paragraph className="mt-2 md:w-1/2 md:mx-auto">
            {t('community.subtitle')}
          </Paragraph>
          <div className="py-2 lg:py-12">
            <Container wide>
              <div className="lg:flex">
                <div className="mt-10 lg:mt-0 lg:w-1/2">
                  <Slack />
                </div>
                <section className="lg:text-left lg:max-w-xl lg:w-1/2 lg:ml-12">
                  <div className="mt-5">
                    <Heading level="h4" typeStyle="heading-md-semibold">
                      {t('community.slackCTATitle')}
                    </Heading>
                    <Paragraph className="mt-2">
                      {t('community.slackCTADesc')}
                    </Paragraph>
                  </div>
                  <div className="mt-5 flex justify-center lg:justify-start">
                    <Button className="w-full md:w-auto" text={t('community.slackCTABtn')} href="/slack-invite" />
                  </div>
                </section>
              </div>

              <div className="mt-12 lg:flex lg:flex-row-reverse">
                <section className="mt-10 lg:mt-0 lg:flex-1">
                  <Calendar size="2" className="float-left" />
                </section>
                <section className="lg:text-left lg:max-w-xl lg:mr-12">
                  <div className="mt-5 lg:mr-12">
                    <Heading level="h3" typeStyle="heading-md-semibold">
                      {t('community.meetingTitle')}
                    </Heading>
                    <Paragraph className="mt-2">
                      {t('community.meetingDesc')}

                      <TextLink href="/community/meetings">
                        {t('community.meetingLink')}
                      </TextLink>
                    </Paragraph>
                    <ul className="mt-5 md:flex justify-center">
                      <li>
                        <GoogleCalendarButton href="https://calendar.google.com/calendar/u/3?cid=Y19xOXRzZWlnbG9tZHNqNm5qdWh2YnB0czExY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t" />
                      </li>
                      <li>
                        <SubscribeButton
                          href="/community/meetings"
                          className="mt-2 md:mt-0 md:ml-2"
                        />
                      </li>
                      <li>
                        <ICSFileButton
                          href="https://calendar.google.com/calendar/ical/c_q9tseiglomdsj6njuhvbpts11c%40group.calendar.google.com/public/basic.ics"
                          className="mt-2 md:mt-0 md:ml-2"
                        />
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </Container>
            <Container wide>
              <NewsroomSection />
            </Container>
          </div>
        </Container>

        <section className="pb-20" role="contentinfo" aria-label='Our Sponsors'>
          <Container className="text-center pb-6" wide as="section">
            <Heading
              level="h3"
              typeStyle="heading-lg"
              className="mb-4"
            >
              {t('sponsors.platinumTitle')}
            </Heading>
            <Sponsors className="mt-4" showSupportBanner={false} />
          </Container>

          <Container className="text-center pb-6" wide as="section">
            <Heading
              level="h3"
              typeStyle="heading-lg"
              className="mb-4"
            >
              {t('sponsors.goldTitle')}
            </Heading>
            <GoldSponsors className="mt-4" showSupportBanner={false} />
          </Container>

          <Container className="text-center pyb-6" wide as="section">
            <Heading
              level="h3"
              typeStyle="heading-lg"
              className="mb-4"
            >
              {t('sponsors.silverTitle')}
            </Heading>
            <SilverSponsors className="mt-4" showSupportBanner={false} />
          </Container>

          <Container className="text-center py-6" wide as="section">
            <Heading
              level="h3"
              typeStyle="heading-md-semibold"
              className="mb-4"
            >
              {t('sponsors.sponsorCTATitle')}
            </Heading>
            <Paragraph className="mt-2 md:w-1/2 md:mx-auto">
              {t('sponsors.sponsorCTADesc')}
              <TextLink href="https://opencollective.com/asyncapi" target="_blank">
                {t('sponsors.sponsorCTALink')}
              </TextLink>
            </Paragraph>
          </Container>
        </section>
        <Container className="text-center py-6 pb-20" wide>
          <Heading level="h3" typeStyle="heading-lg" className="mb-4">
            {t('sponsors.supportedByTitle')}
          </Heading>
          <Paragraph className="mt-3 max-w-2xl mx-auto sm:mt-4 pb-4">
            {t('sponsors.supportedByPretext')}
            <TextLink href="mailto:info@asyncapi.io" target="_blank">
              {t('sponsors.supportedByLink')}
            </TextLink> {t('sponsors.supportedByPosttext')}
          </Paragraph>
          <SupportUs className="mt-4" showSupportBanner={false} />
        </Container>
        <Container className="text-center pb-20 mt-8" wide as="section">
          <Heading level="h3" typeStyle="heading-lg" className="mb-4">
            {t('testimonials.title')}
          </Heading>
          <ul className="max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
            <Testimonial
              className="md:pr-10 lg:pr-16"
              text={t('testimonials.data.0.text')}
              authorAvatar="/img/testimonials/matt-mclarty.jpg"
              authorName={t('testimonials.data.0.authorName')}
              authorDescription={t('testimonials.data.0.authorDescription')}
            />
            <Testimonial
              className="md:pl-10 lg:pl-16"
              text={t('testimonials.data.1.text')}
              authorAvatar="/img/testimonials/bill-doerrfeld.jpg"
              authorName={t('testimonials.data.1.authorName')}
              authorDescription={t('testimonials.data.1.authorDescription')}
            />
            <Testimonial
              className="md:pr-10 lg:pr-16"
              text={t('testimonials.data.2.text')}
              authorAvatar="/img/testimonials/jonathan-schabowsky.jpg"
              authorName={t('testimonials.data.2.authorName')}
              authorDescription={t('testimonials.data.2.authorDescription')}
            />
            <Testimonial
              className="md:pl-10 lg:pl-16"
              text={t('testimonials.data.3.text')}
              authorAvatar="/img/testimonials/eric-horesnyi.jpg"
              authorName={t('testimonials.data.3.authorName')}
              authorDescription={t('testimonials.data.3.authorDescription')}
            />
          </ul>
        </Container>
      </main>
    </>
  );
}

export default HomePage;

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const language = getLanguage(params.lang);
  return {
    props: {
      language,
    },
  };
}
