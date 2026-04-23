import { useI18n } from "@excalidraw/excalidraw/i18n";
import { WelcomeScreen } from "@excalidraw/excalidraw/index";
import React from "react";

export const AppWelcomeScreen: React.FC = React.memo(() => {
  const { t } = useI18n();

  return (
    <WelcomeScreen>
      <WelcomeScreen.Hints.MenuHint>
        {t("welcomeScreen.app.menuHint")}
      </WelcomeScreen.Hints.MenuHint>
      <WelcomeScreen.Hints.ToolbarHint />
      <WelcomeScreen.Center>
        <img
          src="https://www.delivercomputing360.com/images/Logos/DC360-top.png"
          alt="DC360 Logo"
          style={{ width: 300, marginBottom: 16 }}
        />
        <WelcomeScreen.Center.Heading>
          <>
            {t("welcomeScreen.app.center_heading")}
            <br />
            {t("welcomeScreen.app.center_heading_line2")}
            <br />
            {t("welcomeScreen.app.center_heading_line3")}
          </>
        </WelcomeScreen.Center.Heading>
        <WelcomeScreen.Center.Menu>
          <WelcomeScreen.Center.MenuItemLoadScene />
          <WelcomeScreen.Center.MenuItemHelp />
        </WelcomeScreen.Center.Menu>
      </WelcomeScreen.Center>
    </WelcomeScreen>
  );
});