import { Container } from "@/modules/shared/components/Container";
import { LocaleSwitcher } from "@/modules/shared/components/LanguageSwitcher";
import { Logo } from "./Logo";

export const Header = () => (
  <div className="sticky top-0 z-40 bg-primary backdrop-blur-sm">
    <Container className="lg:max-w-5xl xl:max-w-6xl mx-auto sm:py-0.5 flex items-center justify-between">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <Logo />
      </div>
      <LocaleSwitcher />
    </Container>
  </div>
);
