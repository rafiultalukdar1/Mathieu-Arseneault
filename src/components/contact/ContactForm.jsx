import { useState } from 'react';
import { FaCircleCheck, FaSpinner } from 'react-icons/fa6';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

const initialValues = { name: '', email: '', phone: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email address.';
  if (!values.message.trim()) errors.message = 'Please tell us how we can help.';
  return errors;
}

const fieldClass = (hasError) =>
  cn(
    'w-full rounded-lg border bg-white px-[17px] py-4 text-base text-ink outline-none transition-all duration-300 placeholder:text-[#999]',
    hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
      : 'border-[#99999977] hover:border-primary/60 focus:border-primary focus:ring-4 focus:ring-primary/15',
  );

function Field({ id, label, error, children }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block pb-2 text-base text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="pt-1.5 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const onChange = (e) => {
    const { id, value } = e.target;
    setValues((v) => ({ ...v, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus('sending');
    // TODO: replace with a real request (e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })).
    setTimeout(() => setStatus('sent'), 900);
  };

  if (status === 'sent') {
    return (
      <div role="status" className="animate-fade-up py-10 text-center">
        <FaCircleCheck className="mx-auto text-5xl text-primary" />
        <h3 className="pt-5 text-2xl font-bold text-ink">Message sent</h3>
        <p className="mx-auto max-w-sm pt-2 text-[#848282]">
          Thanks, {values.name.split(' ')[0]}. A member of our team will get back to you as soon as possible.
        </p>
        <div className="pt-7">
          <Button
            size="sm"
            onClick={() => {
              setValues(initialValues);
              setStatus('idle');
            }}
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  const describe = (id) => (errors[id] ? `${id}-error` : undefined);

  return (
    <form onSubmit={onSubmit} noValidate>
      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name"
          type="text"
          placeholder="Name"
          autoComplete="name"
          value={values.name}
          onChange={onChange}
          aria-invalid={!!errors.name}
          aria-describedby={describe('name')}
          className={fieldClass(errors.name)}
        />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <input
          id="email"
          type="email"
          placeholder="Type your email"
          autoComplete="email"
          value={values.email}
          onChange={onChange}
          aria-invalid={!!errors.email}
          aria-describedby={describe('email')}
          className={fieldClass(errors.email)}
        />
      </Field>
      <Field id="phone" label="Phone">
        <input
          id="phone"
          type="tel"
          placeholder="Phone"
          autoComplete="tel"
          value={values.phone}
          onChange={onChange}
          className={fieldClass(false)}
        />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          rows={4}
          placeholder="Please enter the details of your request. A member of our support staff will respond as soon as possible"
          value={values.message}
          onChange={onChange}
          aria-invalid={!!errors.message}
          aria-describedby={describe('message')}
          className={cn(fieldClass(errors.message), 'resize-y')}
        />
      </Field>

      <div className="mx-auto max-w-[380px] pt-1">
        <Button
          type="submit"
          block
          disabled={status === 'sending'}
          className="!py-4 !text-lg !font-semibold disabled:pointer-events-none disabled:opacity-70"
        >
          {status === 'sending' ? (
            <span className="inline-flex items-center gap-2">
              <FaSpinner className="animate-spin" /> Sending…
            </span>
          ) : (
            'Submit'
          )}
        </Button>
      </div>
    </form>
  );
}
