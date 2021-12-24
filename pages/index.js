import LittleSquare from "../components/LittleSquare";
import Textarea from "../components/Textarea";
import Footer from "../components/Footer";
import DefaultLook from "../components/DefaultLook";

const content = () => {};

export default function Home() {
  return (
    <div className="content-container h-screen">
      <DefaultLook
        text={
          <>
            <h1 className="text-6xl font-bold">
              Welcome to{" "}
              <a className="text-green-600" href="https://nextjs.org">
                STD
              </a>
            </h1>
            <br />
            <p className="mt-3 text-2xl">
              Get started by editing{" "}
              <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
                pages/index.js
              </code>
            </p>
            <div className="content-list">
              <a href="https://nextjs.org/docs" className="border-custom">
                <h3 className="post-owner text-2xl font-bold">
                  Documentation &rarr;
                </h3>
                <p className="post-text">
                  Find in-depth information about Next.js features and API.
                </p>
              </a>

              <LittleSquare
                title="Send SMS"
                content={<Textarea textName="SMS_Box_1" />}
              />

              {/* <a
      href="https://nextjs.org/learn"
      className="border-custom"
    >
      <h3 className="post-owner text-2xl font-bold">Learn &rarr;</h3>
      <p className="post-text">
        Learn about Next.js in an interactive course with quizzes!
      </p>
    </a> */}

              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className="border-custom"
              >
                <h3 className="post-owner post-owner text-2xl font-bold">
                  Examples &rarr;
                </h3>
                <p className="post-text">
                  Discover and deploy boilerplate example Next.js projects.
                </p>
              </a>

              <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="border-custom"
              >
                <h3 className="post-owner text-2xl font-bold">Deploy &rarr;</h3>
                <p className="post-text">
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </p>
              </a>
            </div>
            <div id="modal-root"></div>
          </>
        }
      />
      <Footer />
    </div>
  );
}
