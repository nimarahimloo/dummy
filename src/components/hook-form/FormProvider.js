import PropTypes from 'prop-types';
// form
import { FormProvider as Form } from 'react-hook-form';

// ----------------------------------------------------------------------

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
};

export default function FormProvider({ children, onSubmit, methods, ...others }) {
  return (
    <Form {...methods}>
      <form {...others} onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
