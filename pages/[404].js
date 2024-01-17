import Link from "next/link";
import React, { Suspense } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";

function ErrorPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Banner />
      <Navbar />
      <Hero />
      <div className="max-w-2xl mx-auto text-center z-50">
        <div className="min-h-[400px] flex justify-center items-center">
          <p className="text-4xl">
            Error 404: This page does not exist, please go back home
          </p>
        </div>
        {/* <Link href={"/"}>
          <button>Go Home</button>
        </Link> */}
      </div>
      {/* <Banner /> */}
      <Footer />
    </Suspense>
  );
}

export default ErrorPage;
