// src/components/PageHeading.tsx
interface PageHeadingProps {
  title: string;
  description: string;
}

const PageHeading = ({ title, description }: PageHeadingProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-3 pb-6">
      <div className="flex min-w-72 flex-col gap-2">
        <p className="text-3xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">{title}</p>
        <p className="text-base font-normal leading-normal text-slate-500 dark:text-slate-400">{description}</p>
      </div>
    </div>
  );
};

export default PageHeading;
