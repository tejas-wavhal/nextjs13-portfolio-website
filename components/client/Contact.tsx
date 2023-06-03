"use client"
import { useState } from 'react'


const Contact = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [messages, setMessages] = useState<string>('')

  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const SubmitHandler = async (e: any) => {
    e.preventDefault();

    setLoading(true)

    try {
      const response = await fetch('/api/sendmessage', {
        method: 'POST',
        headers: { "Content_Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          messages: messages,
        })
      })
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setLoading(false)

        setName("")
        setEmail("")
        setMessages("")

        setStatus('success');
      } else {
        setLoading(false)
        setStatus('error');
      }
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div className='pb-5 bg-gradient-to-br from-orange-500 to-yellow-400' id='Contact'>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className='text-center my-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500 text-4xl dark:from-purple-600 dark:to-pink-800 '>CONTACT ME</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl dark:text-white font-rubik">I make assure that your information is safe</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="">
              <form onSubmit={SubmitHandler} className='flex flex-wrap -m-2 duration-150'>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-white">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" autoComplete='off' required className="w-full bg-white/50 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-white">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete='off' required className="w-full bg-white/50 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-white">Message</label>
                    <textarea value={messages} onChange={(e) => setMessages(e.target.value)} autoComplete='off' required className="w-full bg-white/50 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="py-5 w-full">
                  <div className='text-center my-5 font-bold animate-pulse text-xl'>
                    {status === 'success' && <p className="text-green-700">Thank you for your message!</p>}
                    {status === 'error' && <p className="text-red-600">There was an error submitting your message. Please try again.</p>}
                  </div>
                  <div className="flex justify-center ">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 duration-150 hover:scale-125" type='submit' value="send">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        {
                          loading ? (
                            <>
                              <div role="status">
                                <svg aria-hidden="true" className="w-6 h-6 text-yellow-300 dark:text-white animate-spin fill-pink-600 mx-4" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                              </div>
                            </>
                          ) : (
                            <>
                              Submit
                            </>
                          )}
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact