import React, { useState, useEffect, useRef } from "react";
import Icon, {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MailOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  GithubOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import AboutImage from "./assets/images/myself.jpg";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Timeline from "./components/TimeLine"
import { Layout, Menu, Button, theme } from "antd";
import "./App.css";

const { Header, Sider, Content, Footer } = Layout;

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [miniView, setMiniView] = useState(false); // Set initial miniView state
  const widthRef = useRef(window.innerWidth);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [activeMenuItem, setActiveMenuItem] = useState("introduction");
  const contentRef = useRef(null);

  useEffect(() => {
    const sectionIds = ["introduction", "about", "expertise", "contact"];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, // Adjust as needed
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMenuItem(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollPosition = e.target.scrollTop;
      if (scrollPosition > 100 && window.innerWidth <= 769) {
        setCollapsed(true);
      }
    };

    contentRef.current.addEventListener("scroll", handleScroll);

    return () => {
      contentRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [collapsed]);

  // Event listener to handle window resize
  const handleResize = () => {
    widthRef.current = window.innerWidth;
    console.log("WINDOW WIDTH", widthRef.current);
    setMiniView(widthRef.current <= 769);
  };

  useEffect(() => {
    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSiderToggle = () => {
    console.log("COLLAPSED", collapsed);
    console.log("miniView", miniView);
    if (window.innerWidth <= 769) {
      if (!collapsed) {
        document.body.style.overflow = "hidden";
        document.addEventListener("touchstart", preventTouchScroll, false);
      } else {
        document.body.style.overflow = "";
        document.removeEventListener("touchstart", preventTouchScroll, false);
      }
    }

    setCollapsed(!collapsed);
  };

  const preventTouchScroll = (e) => {
    if (collapsed) {
      e.preventDefault();
    }
  };

  return (
    <Layout
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Sider
        width={!collapsed && !miniView ? "23vw" : "75%"}
        style={{ height: "100%", overflowY: "auto" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div style={{ padding: "10px" }}>
          <img
            src={AboutImage}
            style={{ width: "100%", borderRadius: "60px", padding: "5px 20px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "26px !important", margin: "15px 0" }}>
              <a href="index.html">Merugu Venkatesh</a>
            </h1>
            <p style={{ color: "white" }}>
              <MailOutlined /> meruguvenkatesh96@gmail.com
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.facebook.com/dhruv.barochia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlined
                  style={{ fontSize: 25, padding: "10px", color: "white" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/dbarochiya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined
                  style={{ fontSize: 25, padding: "10px", color: "white" }}
                />
              </a>
              <a
                href="https://github.com/dbarochiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOutlined
                  style={{ fontSize: 25, padding: "10px", color: "white" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div style={{ color: "white", textAlign: "center" }}>
          <p>
            <small>
              Made with <Icon component={HeartSvg} />
              <br></br>
              Thanks{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colorlib
              </a>{" "}
              for inspiration
            </small>
          </p>
          <p>
            <small>Something coming soon !!</small>
          </p>
        </div>
      </Sider>
      <Layout style={{ flexGrow: 1 }}>
        <Header
          style={{
            display: "flex",
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={handleSiderToggle}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Menu
            mode="horizontal"
            selectedKeys={[activeMenuItem]}
            style={{ flexGrow: 1 }}
          >
            <Menu.Item
              key="introduction"
              onClick={() => scrollToSection("introduction")}
            >
              Introduction
            </Menu.Item>
            <Menu.Item key="about" onClick={() => scrollToSection("about")}>
              About
            </Menu.Item>
            <Menu.Item
              key="expertise"
              onClick={() => scrollToSection("expertise")}
            >
              Expertise
            </Menu.Item>
            <Menu.Item key="contact" onClick={() => scrollToSection("contact")}>
              Timeline
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{ height: "calc(100vh - 64px)", overflow: "auto" }}
          ref={contentRef}
        >
          <div id="introduction" style={{ height: "calc(100vh - 64px)" }}>
            <Introduction />
          </div>
          <div id="about" style={{ height: "300px" }}>
            <About />
          </div>
          <div id="expertise" style={{height: '520px', padding:'20px 0'}} >
            <Expertise />
          </div>
          <div id="contact">
            <Timeline />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
