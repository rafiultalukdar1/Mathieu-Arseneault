import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import Heading, { Highlight } from '../components/ui/Heading';

/** Simple centred message page – used for 404s and not-yet-built pages. */
export default function StatusPage({ title, message, action = { to: '/', label: 'Back to home' } }) {
  return (
    <section className="bg-white bg-featured bg-cover bg-center py-24 md:py-32">
      <Container className="text-center">
        <Heading tone="dark" as="h1" size="lg" className="normal-case">
          <Highlight>{title}</Highlight>
        </Heading>
        <p className="mx-auto max-w-md pb-9 pt-4 text-lg text-muted">{message}</p>
        <Button to={action.to}>{action.label}</Button>
      </Container>
    </section>
  );
}
