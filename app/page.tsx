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
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">概要</h2>
          <p className="text-gray-700 leading-relaxed">
            神戸大学にてSLAM（自己位置推定技術）を研究する傍ら、株式会社Baseconnectでの長期インターンシップにおいて、Webアプリケーション開発の経験を積んでまいりました。チームでのバックエンド開発に加え、新規サービスの立ち上げをDB設計から実装まで単独で担当した経験もございます。
            Web開発のスキルと、SLAMの知見という二つの軸で、自動運転技術の発展に貢献したいと考えております。
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">スキル</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Web Frontend</h3>
              <p className="text-gray-700">TypeScript, Next.js, Remix, React</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Web Backend</h3>
              <p className="text-gray-700">Ruby on Rails</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Database/ORM</h3>
              <p className="text-gray-700">Prisma, Supabase, PostgreSQL</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Infrastructure/Others</h3>
              <p className="text-gray-700">Vercel, Git, GitHub</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
              <p className="text-gray-700">JavaScript, TypeScript, Ruby, Python, C++</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Academic Knowledge</h3>
              <p className="text-gray-700">SLAM (Simultaneous Localization and Mapping), ROS 2</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">プロジェクト経験</h2>
          
          {/* Project 1 */}
          <div className="mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
              新規サービス「RiskdogNews」の開発
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">概要</h4>
                <p className="text-gray-700">
                  BtoB向けSaaS「Riskdog」で収集したデータを活用した、集客目的の新規Webサービス。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">役割・担当業務</h4>
                <p className="text-gray-700 mb-2">
                  本プロジェクトの開発を単独で担当。企画内容に基づき、技術的な設計から実装までを一貫して担いました。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>DB設計、および使用技術の選定</li>
                  <li>Next.js(TypeScript), Prismaを用いたバックエンド・フロントエンドの実装</li>
                  <li>Vercel, Supabaseを用いたインフラ構築・デプロイ</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">工夫した点</h4>
                <p className="text-gray-700">
                  集客という目的に対し、SEOを考慮してSSR（サーバーサイドレンダリング）が可能なNext.jsを技術選定しました。また、将来的なAI検索機能の実装を見据え、ベクトルDBに対応したSupabaseをデータベースとして採用するなど、技術的な意思決定を通じてビジネス要件の実現を目指しました。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">ステータス</h4>
                <p className="text-gray-700">現在、リリースに向けて最終実装中です。</p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
              BtoB向けSaaS「Riskdog」の開発
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">概要</h4>
                <p className="text-gray-700">
                  企業の与信管理やリスク管理を行うための、BtoB向けSaaS。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">役割・担当業務</h4>
                <p className="text-gray-700 mb-2">
                  開発チームの一員として、主にバックエンド機能の開発を担当しました。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Ruby on Railsを用いた新機能の実装</li>
                  <li>既存機能の改修およびバグ修正</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">自己PR</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              自動運転技術に興味を持ったのは、Teslaが示す未来への憧れがきっかけでした。その憧れは、大学でSLAM技術と出会ったことで、具体的な学問的興味へと変わりました。
            </p>
            <p>
              当初、AI開発には膨大な実走行データが不可欠であり、先行する巨大企業にどう対抗するのか疑問に感じていました。しかし、ティアフォー社の戦略を深く知るうちに、その考えは変わりました。一社でデータを独占するのではなく、Autowareというオープンなプラットフォームで世界中の開発者を巻き込み、エコシステム全体の力で業界のスタンダードを創るという合理的なアプローチに、深く納得しました。
            </p>
            <p>
              現在は、即戦力として貢献しやすいWeb開発のスキルを「Web.Auto」のようなプラットフォームで活かしつつ、将来的には「Autoware」開発に携わり、SLAMの専門性を高めていきたいと考えています。Webと自動運転、両方の知見を併せ持つエンジニアとして、貴社の「自動運転の民主化」に貢献することが私の目標です。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
