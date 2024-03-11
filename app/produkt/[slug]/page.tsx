export default function Product({params}: { params: { slug: string } }) {
  return (
    <>
      <h1>Strona produktu</h1>
      {params.slug}
    </>
  );
};
