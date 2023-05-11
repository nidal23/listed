import Head from "next/head";
import Layout from "@/layout/layout";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useSession, signIn } from "next-auth/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit
  })
  const router = useRouter()

  async function onSubmit(values) {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "https://listed-inky.vercel.app"
    })

    if (status.ok) router.push(status.url)
  }
  async function handleGoogleSignin(e) {
    e.preventDefault()
    signIn('google', { callbackUrl: "https://listed-inky.vercel.app" })
  }

  async function handleGithubSignin(e) {
    e.preventDefault()
    signIn('github', { callbackUrl: "https://listed-inky.vercel.app" })
  }
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="mx-auto flex flex-col gap-6">
        <div className="title text-left">
          <h1 className="py-2 font-bold text-2xl">Sign In</h1>
          <p className=" text-gray-400">Sign in to your account</p>
        </div>
        <div className="flex gap-3">
          <div>
            <button onClick={handleGoogleSignin} className="bg-red-200 px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <FcGoogle className="w-6 h-6" />
              <span>Sign in with Google</span>
            </button>
          </div>
          <div>
            <button onClick={handleGithubSignin} className="bg-gray-300 px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <AiFillGithub className="w-6 h-6" />
              <span>Sign in with Github</span>
            </button>
          </div>
        </div>
        <div className="bg-white p-10 rounded-lg">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 ">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-left leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  {...formik.getFieldProps('email')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-left leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  {...formik.getFieldProps('password')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 p-2"
                />
              </div>
              {formik.values.password ? <div className="text-left mt-2">
                <a
                  href="#"
                  className=" text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  Forgot Password?
                </a>
              </div> : ""}
            </div>

            {/* login button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <p className="text-center text-gray">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Login;



