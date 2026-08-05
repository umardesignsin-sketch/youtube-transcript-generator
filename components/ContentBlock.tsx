export default function ContentBlock({
  heading,
  paragraphs,
  list,
  listTitle,
}: {
  heading: string;
  paragraphs: string[];
  list?: string[];
  listTitle?: string;
}) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-bold text-slate-900">{heading}</h2>

        <div className="mt-6 space-y-5">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-8 text-slate-600">
              {p}
            </p>
          ))}
        </div>

        {list && list.length > 0 && (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            {listTitle && (
              <h3 className="text-xl font-bold text-slate-900">
                {listTitle}
              </h3>
            )}

            <ul className="mt-4 space-y-3">
              {list.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-slate-600 leading-7"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
