export default function Page() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">사이트 소개</h1>

      <div className="prose prose-gray dark:prose-invert">
        <h2 className="text-2xl font-semibold mt-8 mb-4">kwak.dev-next</h2>

        <h3 className="text-xl font-medium mt-6 mb-3">초기설정</h3>

        <p className="mb-3">Installing dependencies:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>react</li>
          <li>react-dom</li>
          <li>next</li>
        </ul>

        <p className="mb-3">Installing devDependencies:</p>
        <ul className="list-disc pl-6">
          <li>typescript</li>
          <li>@types/node</li>
          <li>@types/react</li>
          <li>@types/react-dom</li>
          <li>@tailwindcss/postcss</li>
          <li>tailwindcss</li>
          <li>eslint</li>
          <li>eslint-config-next</li>
          <li>@eslint/eslintrc</li>
        </ul>
      </div>
    </div>
  );
}
