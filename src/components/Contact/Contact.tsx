import { useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";



const Contact = () => {
    const [errors, setErrors] = useState<{ user_name: string; user_email: string; message: string }>({ user_name: '', user_email: '', message: '' });
    const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const {t} = useTranslation();
    
    const form = useRef<HTMLFormElement>(null);
    const validateForm = () => {
        let formIsValid = true;
        const errors = {} as { user_name: string; user_email: string; message: string };
      
        if ( form.current && !form.current.user_name.value) {
          errors.user_name = t("contact.validation.name");
          formIsValid = false;
        }
      
        if (form.current && !form.current.user_email.value) {
          errors.user_email = t("contact.validation.email");
          formIsValid = false;
        } else if (!/\S+@\S+\.\S+/.test(form.current && form.current.user_email.value)) {
          errors.user_email = t("contact.validation.emailFormat");
          formIsValid = false;
        }
      
        if (form.current && !form.current.message.value) {
          errors.message = t("contact.validation.message");
          formIsValid = false;
        }
      
        setErrors(errors);
        return formIsValid;
      };
      
    
    
      const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
          console.log("Validation Failed");
          return; // Detiene la función si la validación falla
        }
          // Indica que el envío ha comenzado
          setLoading(true);
        emailjs
          .sendForm(
            "service_uzu9dde",
            "template_fmc7fkf",
            form.current as HTMLFormElement, {
              publicKey: "W2QxzyDpLAPWUaBi2",
            }
          )
          .then(
            (result) => {
              console.log(result.text);
              setErrors({ user_name: '', user_email: '', message: '' });
              setLoading(false);
              setMessage(t("contact.success"));
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
      useMemo(() => {
        if (message) {
          setTimeout(() => {
            setMessage("");
          }, 5000);
        }
      }, [message]);
    return (
        <form 
        id="contact"
        ref={form} 
        className="text-sm sm:w-2/4 w-3/4 flex flex-col gap-1"
         onSubmit={sendEmail}
        >
         <input
           type="text"
           name ="user_name"
           onChange={() => setErrors({ ...errors, user_name: "" })}
           placeholder={t("contact.name")}
           className="w-full p-2 border rounded-md mt-2 outline-none"
         />
         <p className="text-red-500 h-[20px]  text-xs">{errors.user_name}</p>
         <input
           type="email"
           onChange={() => setErrors({ ...errors, user_email: "" })}
           name="user_email"
           placeholder={t("contact.email")}
           className="w-full p-2 border rounded-md  outline-none"
         />
         <p className="text-red-500 h-[20px] text-xs">{errors.user_email}</p>
         <textarea
           name="message"
           onChange={() => setErrors({ ...errors, message: "" })}
           placeholder={t("contact.message")}
           className="w-full p-2 min-h-[150px] rounded-md border outline-none"
         />
         <p className="text-red-500 h-[20px] text-xs">{errors.message}</p>
         <div className="flex gap-2 items-center">
         <button
           disabled={loading}
           type="submit"
           className="bg-gray-100 min-w-[120px] min-h-[35px] w-max p-2 rounded-md  cursor-pointer hover:bg-gray-200"
         >
           {loading ? <div className="loader"></div> : t("contact.go")}
         </button>
         {message && <p className="text-[#59f191] text-xs">{message}</p>}
         </div>
       </form>
      );
}
 
export default Contact;