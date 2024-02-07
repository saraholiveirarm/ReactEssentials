export default function Tabs({ children, buttons, ButtonsContainer = "menu"}) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

// Dumb wrapper that can be reused in any part of the app
