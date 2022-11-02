import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Index from "../Layouts/Index";
import { useStateContext } from "../context/contextProvider";
export default function Home() {
  const { activeMenu } = useStateContext();
  return (
    <>
      <Head>
        <title>Next-Sidebar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Index>
        <h1>Hello World</h1>
      </Index>
    </>
  );
}
