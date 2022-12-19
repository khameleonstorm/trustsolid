import { sendPasswordResetEmail } from "firebase/auth";
import { Auth } from "../firebase/config"
import { useState } from "react";


export default function useResetPassword() {
  const [resetMessage, setResetMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [isPending, setIsPending] = useState(false)


  const resetPassword = (email) => {
    setIsPending(true)
    sendPasswordResetEmail(Auth, email)
    .then(() => {
      // Password reset email sent!
      setResetMessage("Check your Mailbox to Reset" )
    })
    .catch((error) => {
      setErrorMessage(error.message)
    })

    setIsPending(false)
  }

  return {errorMessage, resetMessage, resetPassword, isPending}
}
