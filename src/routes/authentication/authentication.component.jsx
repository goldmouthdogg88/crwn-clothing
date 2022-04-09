import {
  signinWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

// import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
