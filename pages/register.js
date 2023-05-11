import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const Register = () => {
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        onSubmit,
    });

    async function onSubmit(values) {
        const options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }

        await fetch(`${process.env.NEXTAUTH_URL}/api/auth/signup`, options)
            .then(res => res.json())
            .then((data) => {
                if (data) router.push(process.env.NEXTAUTH_URL)
            })
    }
    return (
        <Layout>
            <Head>
                <title>Register to listed</title>
            </Head>
            <section className="mx-auto flex flex-col gap-6">
                <div className="title text-left">
                    <h1 className="py-2 font-bold text-2xl">Sign Up</h1>
                    <p className=" text-gray-400">Sign up to Listed!</p>
                </div>

                <div className="bg-white p-10 rounded-lg">
                    <form className="flex flex-col gap-5 " onSubmit={formik.handleSubmit}>
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-left leading-6 text-gray-900"
                            >
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="User Name"
                                    {...formik.getFieldProps("username")}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 p-2"
                                />
                            </div>
                        </div>
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
                                    {...formik.getFieldProps("email")}
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
                                    {...formik.getFieldProps("password")}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 p-2"
                                />
                            </div>
                        </div>

                        {/* Register button */}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
                <p className="text-center text-gray">
                    Already have an account?{" "}
                    <Link href={"/login"} className="text-blue-700">
                        Sign In
                    </Link>
                </p>
            </section>
        </Layout>
    );
};

export default Register;
