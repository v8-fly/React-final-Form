/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import Styles from "./Styles"
import { Form, Field, FormSpy } from "react-final-form"
import RenderCount from "./components/RenderCount"
import createDecorator from "final-form-focus"

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = async (values) => {
  await sleep(100)
  window.alert(JSON.stringify(values, 0, 5))
}

const focusOnError = createDecorator()
const required = (value) => (value ? undefined : "Required")
const App = () => (
  <Styles>
    <h1>React Final Form - Simple Example</h1>
    {/* My underatanding */}
    <Form
      onSubmit={onSubmit}
      decorators={[focusOnError]}
      debug={(state, fieldState) => {
        console.log("FORM_DEBUG", state, fieldState)
      }}
      initialValues={{
        firstName: "HARDIK",
      }}
      render={(props) => {
        console.log("FORMAPI", props)
        return (
          <form onSubmit={props.handleSubmit}>
            <RenderCount />
            <Field
              name="firstName"
              placeholder="first name"
              validate={required}
            >
              {(fieldState) => {
                console.log("FIELD VALUES", fieldState)
                return (
                  <>
                    <div className={fieldState.meta.active ? "active" : ""}>
                      <RenderCount />
                      <label>First Name</label>
                      <input
                        {...fieldState.input}
                        placeholder={fieldState.placeholder}
                      />
                      {fieldState.meta.error && fieldState.meta.touched && (
                        <div style={{ color: "red" }}>
                          {fieldState.meta.error}
                        </div>
                      )}
                    </div>
                    <h3>FIELD VALUES</h3>
                    <pre>{JSON.stringify(fieldState, undefined, 3)}</pre>
                  </>
                )
              }}
            </Field>
            {/* 2nd */}
            <div>
              <RenderCount />
              <label>Middle Name</label>
              <Field
                name="middleName"
                placeholder="Middle name"
                component="input"
                // validate={required}
                subscription={{
                  value: true,
                  active: true,
                  touched: true,
                  error: true,
                }}
              />
            </div>
            {/* 3nd */}
            <div>
              <RenderCount />
              <label>Last Name</label>
              <Field
                name="lastName"
                placeholder="Last name"
                component="input"
                // validate={required}
                subscription={{
                  value: true,
                  active: true,
                  touched: true,
                  error: true,
                }}
              />
            </div>
            <div className="buttons">
              <button
                type="submit"
                disabled={props.submitting}
                onClick={props.form.reset}
              >
                Submit
              </button>
            </div>
            <h3>FORM VALUES</h3>
            <pre>{JSON.stringify(props.values, undefined, 3)}</pre>
            <h3>FORM TOTAL PROPS</h3>
            <pre>{JSON.stringify(props, undefined, 3)}</pre>
            <h3>FORM SPY</h3>
            <FormSpy subscription={{ values: true }}>
              {({ values }) => (
                <pre>
                  <RenderCount />
                  {JSON.stringify(values, undefined, 3)}
                </pre>
              )}
            </FormSpy>
          </form>
        )
      }}
    />
  </Styles>
)

export default App
