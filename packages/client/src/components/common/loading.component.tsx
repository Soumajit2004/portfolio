export default function LoadingComponent({loadingText = "loading...", classname}: {
  classname: string,
  loadingText?: string
}) {
  return (
    <div className={classname + " w-full py-4 flex flex-col justify-center items-center text-white"}>
      <p>{loadingText}</p>
    </div>
  );
}