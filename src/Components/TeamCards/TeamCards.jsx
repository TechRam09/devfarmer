function TeamCards({ name, position, img }) {
  return (
    <article className="min-w-0">
      <img
        src={img}
        alt={`${name}, ${position}`}
        className="aspect-square w-full rounded-lg bg-violet-100 object-contain object-center"
        loading="lazy"
      />
      <h3 className="mt-4 break-words text-base font-semibold text-slate-950 sm:text-lg">
        {name}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-purple-700">{position}</p>
    </article>
  );
}

export default TeamCards;
