import { SignupForm } from "@/components/signup-form"

const Zod2 = () => {
  return (
    <div className="min-h-screen flex">
      
      {/* Chap tomon - Rasm */}
      <div className="hidden lg:flex w-1/2 bg-gray-100 items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800"
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>

      {/* O'ng tomon - Forma */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <SignupForm />
      </div>

    </div>
  )
}

export default Zod2