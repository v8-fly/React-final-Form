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
    <a
      href="https://final-form.org/react"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read Docs
    </a>
    {/* <Form
      onSubmit={onSubmit}
      initialValues={{ stooge: 'larry', employed: false }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Employed</label>
            <Field name="employed" component="input" type="checkbox" />
          </div>
          <div>
            <label>Favorite Color</label>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="#ff0000">❤️ Red</option>
              <option value="#00ff00">💚 Green</option>
              <option value="#0000ff">💙 Blue</option>
            </Field>
          </div>
          <div>
            <label>Toppings</label>
            <Field name="toppings" component="select" multiple>
              <option value="chicken">🐓 Chicken</option>
              <option value="ham">🐷 Ham</option>
              <option value="mushrooms">🍄 Mushrooms</option>
              <option value="cheese">🧀 Cheese</option>
              <option value="tuna">🐟 Tuna</option>
              <option value="pineapple">🍍 Pineapple</option>
            </Field>
          </div>
          <div>
            <label>Sauces</label>
            <div>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="ketchup"
                />{' '}
                Ketchup
              </label>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="mustard"
                />{' '}
                Mustard
              </label>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="mayonnaise"
                />{' '}
                Mayonnaise
              </label>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="guacamole"
                />{' '}
                Guacamole 🥑
              </label>
            </div>
          </div>
          <div>
            <label>Best Stooge</label>
            <div>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="larry"
                />{' '}
                Larry
              </label>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="moe"
                />{' '}
                Moe
              </label>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="curly"
                />{' '}
                Curly
              </label>
            </div>
          </div>
          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    /> */}

    {/* My underatanding */}
    <Form
      onSubmit={onSubmit}
      // validate={(values) => console.log("FORMVALIDATION", values)}
      // One way of validaing
      subscription={{
        submitting: true,
      }}
      decorators={[focusOnError]}
    >
      {(props) => {
        console.log(props)
        return (
          <form onSubmit={props.handleSubmit}>
            <RenderCount />
            {/* <div>
              <label>First Name</label>
              <Field
                name="firstName"
                placeholder="first name"
                component="input"
                validate={required}
              />
            </div> */}
            <Field
              name="firstName"
              placeholder="first name"
              // component="input"
              validate={required}
              subscription={{
                value: true,
                active: true,
                touched: true,
                error: true,
              }}
            >
              {(fieldState) => (
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
              )}
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
              <button type="submit" disabled={props.submitting}>
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
    </Form>
  </Styles>
)

export default App
