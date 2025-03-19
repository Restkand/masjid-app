import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

// Mencegah prop `collapsed` diteruskan ke DOM
const SidebarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "collapsed",
})<{ collapsed: boolean }>`
  height: 100vh;
  width: ${({ collapsed }) => (collapsed ? "80px" : "250px")};
  background-color: #ffffff;
  border-right: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  position: fixed;
  transition: width 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ collapsed }) =>
    collapsed ? "1px 0 5px rgba(0, 0, 0, 0.08)" : "2px 0 8px rgba(0, 0, 0, 0.1)"};
`;

const Logo = styled.div`
  text-align: center;
  padding: 20px 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d6da3;
  cursor: pointer;
  border-bottom: 1px solid #e5e5e5;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Mencegah `collapsed` masuk ke DOM dengan `shouldForwardProp`
const SidebarItemContainer = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== "collapsed",
})<{ collapsed: boolean }>`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  text-decoration: none;
  color: #2d6da3;
  font-size: 1rem;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background-color: #f0f8ff;
    color: #004080;
  }

  span {
    margin-left: ${({ collapsed }) => (collapsed ? "0" : "15px")};
    display: ${({ collapsed }) => (collapsed ? "none" : "inline")};
  }
`;

const SidebarItem = ({ href, collapsed, children }: { href: string; collapsed: boolean; children: React.ReactNode }) => {
  return (
    <li>
      <Link href={href} passHref legacyBehavior>
        <SidebarItemContainer as="a" collapsed={collapsed} data-collapsed={collapsed}>
          {children}
        </SidebarItemContainer>
      </Link>
    </li>
  );
};

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  // Fungsi untuk mendekode token JWT
  const decodeToken = (token: string) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Dekode payload JWT
      return payload;
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  };

  // Ambil role dari token saat komponen di-mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = decodeToken(token);
      if (payload && payload.role) {
        setUserRole(payload.role); // Set role pengguna
      }
    }
  }, []);

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token dari localStorage
    window.location.href = '/login'; // Redirect ke halaman login
  };

  return (
    <SidebarContainer collapsed={isCollapsed}>
      <Logo onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "H" : "HEARTOLOGY"}
      </Logo>

      <SidebarMenu>
        <SidebarItem href="/" collapsed={isCollapsed}>
          🏠 <span>Home</span>
        </SidebarItem>

        {/* Tampilkan menu khusus Admin jika role adalah Admin */}
        {userRole === "Admin" && (
          <>
            <SidebarItem href="/guide" collapsed={isCollapsed}>
              📘 <span>Guide</span>
            </SidebarItem>

            <SidebarItem href="/announcement" collapsed={isCollapsed}>
              📢 <span>Announcement</span>
            </SidebarItem>

            <SidebarItem href="/master" collapsed={isCollapsed}>
              📊 <span>Master</span>
            </SidebarItem>
          </>
        )}

        {/* Tombol Logout */}
        <li>
          <SidebarItemContainer
            as="button" // Ganti dengan `button` karena ini bukan link
            collapsed={isCollapsed}
            onClick={handleLogout} // Panggil fungsi logout saat diklik
            style={{ background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left" }}
          >
            🔓 <span>Log out</span>
          </SidebarItemContainer>
        </li>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;