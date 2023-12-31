import React from "react"
import SingleFAQ from "../../components/faq-question"
import Layout from "@modules/layout/templates"
import Link from "next/link"
import Head from "@modules/common/components/head"

const FAQ = () => {
  const Q_AND_A = [
    {
      q: "Can I collect my order?",
      a: "Of Course! Just give us a call when you’re an hour away so we can make sure you can pick up your order swiftly!",
    },
    {
      q: "When will my order arrive?",
      a: "If you placed your order before 5pm, we aim to deliver your products the next working day",
    },
    {
      q: "Can I track my order?",
      a: "Of Course! we will send you the relevant tracking details when you complete your order!",
    },
    {
      q: "Is there a warranty on your products?",
      a: "Yes! just check out our 'Information' page for the details.",
    },
    {
      q: "Can I pay in cash?",
      a: "Yep. Just give us a call so we can sort out the logistics and get your order ready for you",
    },
    {
      q: "How do I apply for the training workshop?",
      a: "Simply fill out the form on our 'Information' page and we'll be in touch with the next steps",
    },
  ]

  return (
    <div>
      <Head title="FAQ" description="Frequently asked questions." />
      <div className="content-container pt-14">
        <p className="text-2xl font-bold">Frequently Asked Questions</p>
        <p className="pt-3">
          Quick answers to questions you may have. Can’t find what you’re
          looking for?{" "}
          <Link className="text-blue-800 font-semibold" href={"/information"}>
            Contact us!
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 content-container">
        {Q_AND_A.map((topic) => (
          <SingleFAQ key={topic.q} question={topic.q} answer={topic.a} />
        ))}
      </div>
    </div>
  )
}

FAQ.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default FAQ
