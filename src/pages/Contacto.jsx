import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef();
  const [enviado, setEnviado] = useState(false);

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_mmgsfrf",
        "template_aey5ctr",
        form.current,
        "8rUr2AD4_HNp_kAjG"
      )
      .then(
        (result) => {
          console.log(result.text);
          reset();
          setEnviado(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 px-3 md:px-40 py-10">
      <img
        src="./correo.jpg"
        alt=""
        className="md:w-[518px] md:h-[560px] rounded-md"
      />
      <div className="flex flex-col justify-between gap-3">
        <h1 className="text-3xl md:text-4xl font-bold text-green-500">
          Contacto
        </h1>
        <div className="text-lg">
          <p>¿Quieres contactarme?</p>
          <p>
            Complete el siguiente formulario y me pondré en contacto con usted.
          </p>
        </div>
        <form
          ref={form}
          name="dataForm"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 bg-[#1E1E1E] py-4 x-2 md:px-3 md:w-[600px] rounded-md"
        >
          <label htmlFor="nombre" className="text-lg font-semibold -mb-2">
            Nombre
          </label>
          <input
            className="p-2 outline-none rounded-md"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Escribe tu nombre"
            {...register("nombre", {
              required: true,
              minLength: 3,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p className="text-red-500 -mt-4">*El campo es requerido*</p>
          )}
          {errors.nombre?.type === "minLength" && (
            <p className="text-red-500 -mt-4">
              *El campo debe tener más de 3 caracteres*
            </p>
          )}

          <label htmlFor="email" className="text-lg font-semibold -mb-2">
            Email
          </label>
          <input
            className="p-2 outline-none rounded-md"
            type="email"
            id="email"
            placeholder="email@dominio.com"
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 -mt-4">*El campo es requerido*</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-500 -mt-4">*El email es inválido*</p>
          )}

          <label htmlFor="asunto" className="text-lg font-semibold -mb-2">
            Asunto
          </label>
          <input
            className="p-2 outline-none rounded-md"
            type="text"
            id="asunto"
            name="asunto"
            placeholder="Escribe el asunto"
            {...register("asunto", {
              required: true,
              minLength: 4,
            })}
          />
          {errors.asunto?.type === "required" && (
            <p className="text-red-500 -mt-4">*El campo es requerido*</p>
          )}
          {errors.asunto?.type === "minLength" && (
            <p className="text-red-500 -mt-4">
              *El campo debe tener más de 4 caracteres*
            </p>
          )}

          <label htmlFor="mensaje" className="text-lg font-semibold -mb-2">
            Mensaje
          </label>
          <textarea
            className="p-2 outline-none rounded-md"
            placeholder="Escribe el mensaje"
            type="text"
            id="mensaje"
            rows="1"
            cols="4"
            {...register("mensaje", {
              required: true,
              maxLength: 500,
            })}
          />
          {errors.mensaje?.type === "required" && (
            <p className="text-red-500 -mt-4">*El campo es requerido*</p>
          )}
          {errors.mensaje?.type === "maxLength" && (
            <p className="text-red-500 -mt-4">
              *El campo debe tener menos de 500 caracteres*
            </p>
          )}

          <button
            type="submit"
            className="bg-green-500 rounded-lg font-bold p-2 hover:bg-green-600 mt-2"
          >
            Enviar
          </button>
        </form>
        {enviado && (
          <p className="text-center text-green-400 md:text-lg -mt-4">
            ¡El formulario se ha enviado con éxito!
          </p>
        )}
      </div>
    </div>
  );
}

export default Contacto;
