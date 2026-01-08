import styles from "./drawer.module.css";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  display: "mobile" | "desktop" | "both";
  children: React.ReactNode;
};

export default function Drawer({ open, children, setOpen, display }: any) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      const drawer = document.getElementById("drawer-container");
      drawer?.classList.add(styles.closeDrawer);
      setTimeout(() => {
        setOpen(!open);
      }, 500);
    }
  };

  if (!open) return null;

  return (
    <div
      className={`${styles.drawerOverlay} ${
        display === "mobile"
          ? styles.mobileStyles
          : display === "desktop"
          ? styles.mobileStyles
          : ""
      }`}
      onClick={handleClose}
    >
      <div
        id="drawer-container"
        className={`${styles.drawerContainer} ${styles.openDrawer}`}
      >
        {children}
      </div>
    </div>
  );
}
