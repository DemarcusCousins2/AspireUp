import { useState, useEffect } from "react";
import "../css/Login.css";
import PasswordChecklist from "react-password-checklist";
import { useNavigate } from "react-router-dom";

function Login() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [grade, setGrade] = useState(0);
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [relationship, setRelationship] = useState("");
  const [fNameErrorMessage, setfNameIsVisible] = useState(false);
  const [lNameErrorMessage, setlNameIsVisible] = useState(false);
  const [gradeErrorMessage, setGradeIsVisible] = useState(false);
  const [birthdayErrorMessage, setBirthdayIsVisible] = useState(false);
  const [emailErrorMessage, setEmailIsVisible] = useState(false);
  const [relationshipErrorMessage, setRelationshipIsVisible] = useState(false);
  const emailAPI =
    "https://ndkonnltdk.execute-api.us-west-2.amazonaws.com/prod/email";
  const navigate = useNavigate();
  let passwordValid = false;

  async function sendData() {
    const response = await fetch(emailAPI, {
      method: "POST",
      body: JSON.stringify({
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        email: email,
        password: password,
        fName: fName,
        lName: lName,
        grade: grade,
        birthday: birthday,
        relationship: relationship,
      }),
    });

    const data = await response.json();
    console.log(data);
  }
  const checkFields = () => {
    const regex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    let fNameValidation = fName == "";
    let lNameValidation = lName == "";
    let gradeValidation = grade == 0;
    let birthdayValidation = birthday == "";
    let relationshipValidation = relationship == "";
    let emailValidation = !regex.test(email);
    if (fNameValidation) {
      setfNameIsVisible(true);
    } else {
      setfNameIsVisible(false);
    }

    if (lNameValidation) {
      setlNameIsVisible(true);
    } else {
      setlNameIsVisible(false);
    }

    if (gradeValidation) {
      setGradeIsVisible(true);
    } else {
      setGradeIsVisible(false);
    }

    if (birthdayValidation) {
      setBirthdayIsVisible(true);
    } else {
      setBirthdayIsVisible(false);
    }

    if (emailValidation) {
      setEmailIsVisible(true);
    } else {
      setEmailIsVisible(false);
    }

    if (relationshipValidation) {
      setRelationshipIsVisible(true);
    } else {
      setRelationshipIsVisible(false);
    }
    console.log(fName);
    console.log(lName);
    console.log(grade);
    console.log(birthday);
    console.log(email);
    console.log(relationship);

    if (
      !fNameValidation &&
      !lNameValidation &&
      !gradeValidation &&
      !birthdayValidation &&
      !emailValidation &&
      passwordValid &&
      !relationshipValidation
    ) {
      sendData();
      console.log("valid inputs!");
      navigate("/email");
    } else {
      console.log("invalid inputs!");
      console.log("password", passwordValid);
      console.log("email", !emailValidation);
    }
  };
  return (
    <>
      <header>
        <h1>Sign Up</h1>
      </header>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={(e) => setFName(e.target.value)}
          />
          <p
            className={
              fNameErrorMessage ? "error-message visible" : "error-message"
            }
          >
            Field cannot be empty
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={(e) => setLName(e.target.value)}
          />
          <p
            className={
              lNameErrorMessage ? "error-message visible" : "error-message"
            }
          >
            Field cannot be empty
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <br />
          <input
            type="radio"
            id="grade9"
            name="grade"
            value="9"
            onChange={(e) => setGrade(parseInt(e.target.value))}
          />
          <label htmlFor="grade9">9</label>
          <br />
          <input
            type="radio"
            id="grade10"
            name="grade"
            value="10"
            onChange={(e) => setGrade(parseInt(e.target.value))}
          />
          <label htmlFor="grade10">10</label>
          <br />
          <input
            type="radio"
            id="grade11"
            name="grade"
            value="11"
            onChange={(e) => setGrade(parseInt(e.target.value))}
          />
          <label htmlFor="grade11">11</label>
          <br />
          <input
            type="radio"
            id="grade12"
            name="grade"
            value="12"
            onChange={(e) => setGrade(parseInt(e.target.value))}
          />
          <label htmlFor="grade12">12</label>
          <br />
          <p
            className={
              gradeErrorMessage ? "error-message visible" : "error-message"
            }
          >
            Field cannot be empty
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            onChange={(e) => setBirthday(e.target.value)}
          />
          <p
            className={
              birthdayErrorMessage ? "error-message visible" : "error-message"
            }
          >
            Field cannot be empty
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="relationship">Are you a parent or a child?</label>
          <br />
          <input
            type="radio"
            id="parent"
            name="relationship"
            value="parent"
            onChange={(e) => setRelationship("parent")}
          />
          <label htmlFor="parent">Parent</label>
          <br />
          <input
            type="radio"
            id="child"
            name="relationship"
            value="child"
            onChange={(e) => setRelationship("child")}
          />
          <label htmlFor="child">Child</label>
          <br />
          <p
            className={
              relationshipErrorMessage
                ? "error-message visible"
                : "error-message"
            }
          >
            Field cannot be empty
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p
            className={
              emailErrorMessage ? "error-message visible" : "error-message"
            }
          >
            Enter a valid email
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password-again">Password Again:</label>
          <input
            type="password"
            id="password-again"
            name="password-again"
            onChange={(e) => setPasswordAgain(e.target.value)}
          />

          <PasswordChecklist
            rules={[
              "minLength",
              "specialChar",
              "number",
              "capital",
              "match",
              "noSpaces",
              "notEmpty",
            ]}
            minLength={8}
            value={password}
            valueAgain={passwordAgain}
            onChange={(isValid) => {
              if (isValid) {
                passwordValid = true;
              } else {
                passwordValid = false;
              }
            }}
          />
        </div>
        <button type="button" onClick={checkFields}>
          Submit
        </button>
        <nav>
          <a href="signup.html">Already have an account?</a>
        </nav>
      </form>
    </>
  );
}

export default Login;
