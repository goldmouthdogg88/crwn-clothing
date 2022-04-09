import { Fragment } from "react";
import {
  signinWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const SignIn = () => {
  // useEffect(() => {
  //   async function getResponse() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   getResponse();
  // });

  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <Fragment>
      <div>
        <SignInForm />
      </div>

      <div style={{ padding: "100px", float: "right" }}>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <SignUpForm />
      </div>
    </Fragment>
  );
};

export default SignIn;
