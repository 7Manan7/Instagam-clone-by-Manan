import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

function signIn({ providers }) {
  return (
    <>
      <Header />
      <div
        className="flex flex-col items-center justify-center min-h-screen py-2
       px-14 text-center -mt-20"
      >
        <img
          className="w-60"
          src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
          alt=""
        />
        <p className="font-xs italic">
          Instagram App Clone built by Manan Singh
        </p>
        <div className="mt-8">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
export default signIn;
