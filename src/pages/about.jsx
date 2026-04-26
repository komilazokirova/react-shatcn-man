import { AboutTable } from "@/components/about/table" // Nomini AboutTable qildik

export const AboutPage = () => {
  // Test uchun namunaviy ma'lumotlar (Buni API'dan olishingiz ham mumkin)
  const aboutData = [
    { status: "Success", email: "test@example.com", amount: "$100" },
    { status: "Pending", email: "user@mail.com", amount: "$50" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <p>This is the content of the about page.</p>
      
      {/* Jadvalga ma'lumotni 'data' sifatida uzatamiz */}
      <AboutTable data={aboutData} /> 
    </div>
  )
}