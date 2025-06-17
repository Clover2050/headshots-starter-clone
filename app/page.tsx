export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.href = '/habit.html';`,
        }}
      />
      <div>正在跳转到习惯陪伴...</div>
    </>
  );
}
