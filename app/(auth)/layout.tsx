const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-full flex items-center justify-center bg-blue-700"
      style={{
        backgroundImage:
          "url('https://images.alphacoders.com/129/thumb-1920-1291249.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
