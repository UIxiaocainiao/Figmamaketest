import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Grid3X3,
  LayoutGrid,
  Plus,
  Search,
  PanelLeft,
  Sparkles,
  Star,
  User,
  Users,
} from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const primaryNav = [
  { label: "新建项目", icon: Plus },
  { label: "搜索", icon: Search },
  { label: "项目", icon: LayoutGrid },
  { label: "技能", icon: Sparkles },
];

const recentItems = ["Chaos", "Brand", "Research", "Writing"];
const categories = ["学习", "研究", "写作", "设计", "营销", "效率"];

const featuredCards = [
  { title: "报告", desc: "把资料自动整理成可分享报告", tint: "from-[#f8ebe7] to-white" },
  { title: "播客", desc: "将主题延展为对话式音频脚本", tint: "from-[#eef0ff] to-white" },
  { title: "工作流", desc: "快速搭建你的学习-创作流程", tint: "from-[#fff5de] to-white" },
  { title: "图片", desc: "从想法到视觉稿的一站式素材板", tint: "from-[#eaf8f1] to-white" },
  { title: "长文", desc: "结构化输出公众号/博客文章", tint: "from-[#f0eefc] to-white" },
  { title: "总结", desc: "提炼重点并附上行动建议", tint: "from-[#e9f3fa] to-white" },
];

const skillCards = [
  "图文创作", "采访提纲", "课程大纲", "SEO 文章", "竞品分析",
  "选题池", "知识卡片", "周报助手", "研究框架", "灵感整理",
];

const designVars = {
  "--ym-bg-page": "#f7f7f5",
  "--ym-bg-main": "#fcfcfb",
  "--ym-bg-card": "#ffffff",
  "--ym-bg-soft": "#f1f1ee",
  "--ym-line": "#e7e7e3",
  "--ym-text-1": "#101113",
  "--ym-text-2": "#181a1f",
  "--ym-text-3": "#5b606a",
  "--ym-text-4": "#878d98",
  "--ym-radius-sm": "6px",
  "--ym-radius-md": "10px",
  "--ym-radius-lg": "16px",
  "--ym-radius-xl": "24px",
  "--sidebar-expanded-width": "264px",
  "--sidebar-inner-size": "40px",
  "--sidebar-rail-padding": "1rem",
  "--sidebar-border-width": "1px",
  "--sidebar-collapsed-width": "0px",
} as React.CSSProperties;

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [topTab, setTopTab] = useState<"explore" | "mine">("explore");
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });
  const tabListRef = useRef<HTMLDivElement | null>(null);
  const exploreBtnRef = useRef<HTMLButtonElement | null>(null);
  const mineBtnRef = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    const list = tabListRef.current;
    const active = topTab === "explore" ? exploreBtnRef.current : mineBtnRef.current;
    if (!list || !active) return;
    const left = active.offsetLeft;
    const width = active.offsetWidth;
    setTabIndicator({ left, width });
  }, [topTab]);

  return (
    <div className="min-h-screen bg-[var(--ym-bg-page)] [font-family:Geist,Inter,system-ui,-apple-system,sans-serif] [&_[data-slot=card]]:ring-0 [&_[data-slot=card]]:shadow-none [&_[data-slot=button]]:shadow-none" style={designVars}>
      <div className="flex h-screen gap-0 overflow-hidden">
        <aside id="stage-slideover-sidebar"
          className={cn(
            "hidden shrink-0 rounded-2xl bg-[var(--ym-bg-page)] py-4 transition-[width,padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex md:flex-col",
            sidebarCollapsed ? "w-[var(--sidebar-collapsed-width)] px-0" : "w-[var(--sidebar-expanded-width)] px-4",
          )}
          onClick={(event) => {
            if (!sidebarCollapsed) return;
            if (!(event.target instanceof Element)) return;
            if (event.target.closest("[data-sidebar-item='true']")) return;
            setSidebarCollapsed(false);
          }}
        >
          <div className={cn("mb-3 flex items-center px-1", sidebarCollapsed ? "hidden" : "gap-2")}>
            <div className="grid size-8 place-items-center rounded-lg bg-black text-white">
              <Sparkles className="size-4" />
            </div>
            {!sidebarCollapsed ? (
              <div className="text-[18px] font-semibold tracking-tight text-[var(--ym-text-1)]">DesignNest</div>
            ) : null}
            {!sidebarCollapsed ? (
            <button
              type="button"
              className="ml-auto text-[var(--ym-text-3)] hover:bg-[#ececee] flex h-9 w-9 items-center justify-center rounded-lg outline-none disabled:opacity-50 cursor-w-resize"
              aria-expanded="true"
              aria-controls="stage-slideover-sidebar"
              aria-label="关闭边栏"
              data-testid="close-sidebar-button"
              data-state="open"
              onClick={() => setSidebarCollapsed(true)}
              title="收起侧栏"
            >
              <PanelLeft className="size-5" aria-hidden="true" />
            </button>
            ) : null}
          </div>

          {!sidebarCollapsed ? <nav className="space-y-1 px-0.5">
            {primaryNav.map((item) => (
              <button
                key={item.label}
                className={cn(
                  "flex h-10 w-full items-center rounded-lg px-2 text-left text-[15px] font-normal text-[var(--ym-text-2)] transition-[width,padding,gap] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#ececee]",
                  sidebarCollapsed ? "w-[var(--sidebar-inner-size)] justify-center px-0 gap-0" : "gap-2",
                  item.label === "技能" && "bg-[#e9e9eb] font-semibold",
                )}
                title={item.label}
              >
                <item.icon className="size-4" />
                <span className={cn("transition-opacity duration-150", sidebarCollapsed ? "w-0 opacity-0" : "opacity-100")}>{item.label}</span>
              </button>
            ))}
          </nav> : null}

          {!sidebarCollapsed ? <div className="mt-4 px-2 text-xs text-[var(--ym-text-4)]">近期项目</div> : null}
          {!sidebarCollapsed ? (
            <div className="space-y-1 px-0.5 mt-1.5">
              {recentItems.map((item, idx) => (
                <button
                  key={item}
                  className={cn(
                    "flex h-10 w-full items-center rounded-lg text-[14px] font-normal text-[var(--ym-text-3)] transition-[width,padding,gap] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#ececee]",
                    "justify-between px-3",
                    idx === 0 && "bg-white font-medium text-[var(--ym-text-2)]",
                  )}
                  title={item}
                >
                  <span>{item}</span>
                  <ChevronRight className="size-4" />
                </button>
              ))}
            </div>
          ) : null}


          {!sidebarCollapsed ? <div className="mt-auto flex h-12 rounded-xl hover:bg-[#ececee] items-center gap-2 px-2">
            <div className="grid size-8 place-items-center rounded-full bg-white text-[var(--ym-text-2)]">
              <User className="size-4" />
            </div>
            {!sidebarCollapsed ? (
              <>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-[var(--ym-text-2)]">pengshz</p>
                </div>
                <Badge className="rounded-lg bg-white text-xs text-[var(--ym-text-3)]">Free</Badge>
              </>
            ) : null}
          </div> : null}
        </aside>

        {sidebarCollapsed ? (
          <div
            data-sidebar-panel=""
            className="fixed left-4 top-4 z-10 flex items-center gap-0.5 rounded-xl border bg-[var(--ym-bg-card)] p-0.5 text-[var(--ym-text-3)] shadow-sm transition-opacity"
          >
            <button
              type="button"
              aria-label="Collapse Sidebar"
              aria-controls="stage-slideover-sidebar"
              data-collapsed="true"
              className="inline-flex size-8 items-center justify-center rounded-lg transition-colors duration-100 hover:bg-[#ececee]"
              onClick={() => setSidebarCollapsed(false)}
            >
              <PanelLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="inline-flex size-8 items-center justify-center rounded-lg transition-colors duration-100 hover:bg-[#ececee]"
              data-search=""
              aria-label="Open Search"
              onClick={() => {
                const el = document.querySelector('input[placeholder="搜索"]') as HTMLInputElement | null;
                el?.focus();
              }}
            >
              <Search className="size-5" />
            </button>
          </div>
        ) : null}

        <main
          className={cn(
            "mt-3 mr-4 mb-4 min-w-0 flex-1 rounded-[var(--ym-radius-xl)] border border-[var(--ym-line)] bg-[var(--ym-bg-main)] px-9 py-7",
            sidebarCollapsed && "ml-3",
          )}
        >
          <ScrollArea className="h-full">
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-[40px] font-semibold tracking-[-0.03em] text-[var(--ym-text-1)]">技能</h1>
                <Button className="h-10 rounded-full bg-[#121419] px-4 text-[14px] font-semibold text-white hover:bg-[#0a0c10]">
                  <Plus className="size-4" />
                  新技能
                </Button>
              </div>

              <div
                ref={tabListRef}
                role="tablist"
                className="scrollbar-none relative inline-flex max-w-full overflow-x-auto rounded-full"
              >
                <span
                  className="absolute inset-y-1.5 rounded-full bg-neutral-900 transition-[left,width] duration-150 ease-in-out"
                  aria-hidden="true"
                  style={{ left: tabIndicator.left, width: tabIndicator.width }}
                />
                <button
                  ref={exploreBtnRef}
                  role="tab"
                  type="button"
                  id="tab-explore"
                  aria-selected={topTab === "explore"}
                  aria-controls="panel-explore"
                  tabIndex={topTab === "explore" ? 0 : -1}
                  className={cn(
                    "relative z-10 whitespace-nowrap px-6 py-3.5 text-sm transition-colors duration-300",
                    topTab === "explore" ? "text-white" : "text-neutral-900",
                  )}
                  onClick={() => setTopTab("explore")}
                >
                  探索
                </button>
                <button
                  ref={mineBtnRef}
                  role="tab"
                  type="button"
                  id="tab-mine"
                  aria-selected={topTab === "mine"}
                  aria-controls="panel-mine"
                  tabIndex={topTab === "mine" ? 0 : -1}
                  className={cn(
                    "relative z-10 whitespace-nowrap px-6 py-3.5 text-sm transition-colors duration-300",
                    topTab === "mine" ? "text-white" : "text-neutral-900",
                  )}
                  onClick={() => setTopTab("mine")}
                >
                  我的
                </button>
              </div>

              <section>
                <h2 className="mb-3 text-[24px] font-semibold leading-7 tracking-[-0.02em] text-[var(--ym-text-2)]">推荐</h2>
                <div className="grid gap-4 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2">
                  {featuredCards.map((card) => (
                    <Card
                      key={card.title}
                      className={cn(
                        "rounded-[var(--ym-radius-lg)] border border-[var(--ym-line)] bg-gradient-to-b py-0 shadow-none",
                        card.tint,
                      )}
                    >
                      <CardContent className="flex h-[250px] flex-col p-5">
                        <div className="mb-2 text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--ym-text-2)]">{card.title}</div>
                        <p className="text-[13px] leading-[1.55] text-[var(--ym-text-3)]">{card.desc}</p>
                        <div className="mt-auto flex items-center gap-2 text-xs text-[var(--ym-text-4)]">
                          <div className="flex -space-x-1">
                            <span className="inline-block size-5 rounded-full bg-white ring-1 ring-[#e5e5e7]" />
                            <span className="inline-block size-5 rounded-full bg-[#dfe6ff] ring-1 ring-[#e5e5e7]" />
                            <span className="inline-block size-5 rounded-full bg-[#ffe8cf] ring-1 ring-[#e5e5e7]" />
                          </div>
                          <span>+12</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {categories.map((item, idx) => (
                      <button
                        key={item}
                        className={cn(
                          "h-8 rounded-full px-4 text-[13px] font-medium",
                          idx === 0 ? "border border-[var(--ym-line)] bg-white text-[var(--ym-text-2)]" : "bg-[var(--ym-bg-soft)] text-[var(--ym-text-3)]",
                        )}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--ym-text-4)]" />
                      <Input
                        placeholder="搜索"
                        className="h-8 w-[190px] rounded-full border-[var(--ym-line)] bg-white pl-9 text-[13px] shadow-none"
                      />
                    </div>
                    <button className="flex h-8 items-center gap-1 rounded-full border border-[var(--ym-line)] bg-white px-3 text-[13px] font-medium text-[var(--ym-text-3)]">
                      全部
                      <ChevronDown className="size-4" />
                    </button>
                    <button className="grid size-8 place-items-center rounded-[var(--ym-radius-md)] border border-[var(--ym-line)] bg-white text-[var(--ym-text-3)]">
                      <LayoutGrid className="size-4" />
                    </button>
                    <button className="grid size-8 place-items-center rounded-[var(--ym-radius-md)] bg-[var(--ym-bg-soft)] text-[var(--ym-text-3)]">
                      <Grid3X3 className="size-4" />
                    </button>
                  </div>
                </div>

                <div className="grid gap-5 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2">
                  {skillCards.map((title) => (
                    <Card key={title} className="rounded-[var(--ym-radius-lg)] border border-[var(--ym-line)] bg-[var(--ym-bg-card)] py-0 shadow-none">
                      <CardHeader className="pb-2 pt-5">
                        <CardTitle className="text-[18px] font-semibold leading-6 text-[var(--ym-text-2)]">{title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex min-h-[104px] flex-col justify-between space-y-4 pb-4">
                        <p className="line-clamp-3 text-sm leading-6 text-[var(--ym-text-3)]">
                          用于快速组织信息、生成结构化草稿，并支持多人协作沉淀最佳实践。
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[var(--ym-text-4)]">
                          <span className="inline-flex items-center gap-1">
                            <Users className="size-3.5" />
                            2.4k
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Star className="size-3.5" />
                            4.8
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
