export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            森 楽人 / Gakuto Mori
          </h1>
          <p className="text-gray-600 mb-4">
            神戸大学 工学部 情報知能工学科 4年 / CINAPS研究室
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:gakuto0177@gmail.com"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Email: gakuto0177@gmail.com
            </a>
            <a
              href="https://github.com/gakuto06250177"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              GitHub: gakuto06250177
            </a>
          </div>
        </div>
      </header>

      {/* Summary */}
     
    </div>
  );
}
