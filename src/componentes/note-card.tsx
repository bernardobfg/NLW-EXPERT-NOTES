export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden outline-none relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">Há 4 dias</span>
      <p className="text-sm leading-6 text-slate-300">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore iure
        quaerat possimus illo magnam dolores minus. Voluptatibus, deleniti aut!
        Veritatis quae temporibus molestias dolor. Non, exercitationem?
        Perspiciatis unde vel iusto. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Dolore iure quaerat possimus illo magnam dolores
        minus. Voluptatibus, deleniti aut! Veritatis quae temporibus molestias
        dolor. Non, exercitationem? Perspiciatis unde vel iusto.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
