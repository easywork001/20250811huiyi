import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, Calendar, Users, MapPin, FileText, ExternalLink, Clock, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import yishuLogo from './assets/yishu-logo.png'
import './App.css'

function App() {
  const [expandedSections, setExpandedSections] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 模拟页面加载
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  // 默认展开第一个部分
  useEffect(() => {
    setExpandedSections({ summary: true })
  }, [])

  const sections = [
    {
      id: 'summary',
      title: '调研结论概述',
      icon: <FileText className="w-5 h-5" />,
      color: 'from-blue-600 to-indigo-600',
      content: [
        '青岛本地AI智能体企业技术储备与应用探索已有基础，但在人才、资金、市场教育、产业交流等方面存在明显短板；',
        '本地智能体生态处于早期阶段，尚缺乏垂直场景试点和标杆企业引领；',
        '初创企业普遍聚焦应用层创新，依托大厂生态或开源模型降低研发门槛，但商业化和规模化路径尚不清晰。'
      ]
    },
    {
      id: 'challenges',
      title: '关键痛点与发展障碍',
      icon: <Users className="w-5 h-5" />,
      color: 'from-red-600 to-pink-600',
      content: [
        {
          subtitle: '人才引进与留用困难',
          points: [
            '高端研发人才落户及短期驻留政策门槛高（如人才公寓需半年社保）；',
            '本地缺乏高水平技术交流与持续学习环境。'
          ]
        },
        {
          subtitle: '融资与资金支持不足',
          points: [
            '早期投资机构数量有限，投融资生态对创新型AI企业的容错率低；',
            '本地产投机构多倾向购买技术服务，限制企业独立发展。'
          ]
        },
        {
          subtitle: '市场教育与客户认知滞后',
          points: [
            '中小企业AI化意愿弱，大客户路径依赖强；',
            '缺少系统化行业教育与真实案例示范，导致企业与技术脱节。'
          ]
        },
        {
          subtitle: '产业生态平台缺失',
          points: [
            '缺乏以AI技术落地为导向的本地行业交流、共创与试点合作机制。'
          ]
        }
      ]
    },
    {
      id: 'suggestions',
      title: '政策建议与行动清单',
      icon: <MapPin className="w-5 h-5" />,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          subtitle: '人才政策优化',
          points: [
            '建立战略新兴产业企业的人才公寓"绿色通道"，允许企业背书申请机动名额；',
            '参考杭州模式，为短期来访的技术人才提供低价酒店或集中住宿配套；',
            '设立AI技术交流中心，定期引入外部专家开展培训与工作坊。'
          ]
        },
        {
          subtitle: '融资与资金支持',
          points: [
            '引入更多早期风险投资机构，提供"投产品、投模式"的资金支持；',
            '提升政策性资金的容错率，对试点型、探索型AI项目设立专项扶持基金；',
            '建立市级AI产业基金，支持重点企业快速验证与规模化落地。'
          ]
        },
        {
          subtitle: '市场教育与行业示范',
          points: [
            '政府牵头联合协会，建立行业AI应用普及机制，面向中小企业分行业举办培训；',
            '在制造业、检测服务、教育、消费品等行业设立智能体应用示范项目，形成可复制推广的案例库。'
          ]
        },
        {
          subtitle: '产业生态建设',
          points: [
            '搭建"青岛AI智能体产业共创平台"，汇聚企业、大厂生态、投资机构和行业用户；',
            '鼓励企业开放非核心成果，促进资源共享与合作落地；',
            '对重点项目提供政务对接、行业推广和政策配套支持。'
          ]
        }
      ]
    },
    {
      id: 'actions',
      title: '近期可落地的三项优先行动',
      icon: <Calendar className="w-5 h-5" />,
      color: 'from-purple-600 to-violet-600',
      content: [
        '启动"青岛AI人才引进绿色通道"试点：对重点企业研发团队开放人才公寓、短期住宿、配套生活服务。',
        '设立首批"AI智能体行业示范项目"：选择2-3个行业作为应用试点，半年内形成可展示成果。',
        '举办"青岛AI智能体产业对接周"：集中组织技术展示、投资对接、行业沙龙，促成多方合作签约。'
      ]
    }
  ]

  const meetingDetails = {
    background: '本次会议由青岛市委政研室、青岛市人工智能协会联合发起，属于市级产业调研专项行动的一部分。调研主题聚焦人工智能产业尤其是智能体（AI Agent）方向，响应市委关于推动产业创新、优化产业结构的部署。',
    participants: [
      {
        category: '政府端',
        members: ['青岛市委政研室调研处领导王健、张国栋、谢立鹏'],
        icon: <Building2 className="w-5 h-5" />
      },
      {
        category: '行业协会与产业组织',
        members: [
          '青岛市人工智能协会郝江培',
          '青岛市产业研究院：高阳及随行人员',
          '青岛市市南区自媒体协会妇联主席（兼易术科技外部合伙人）'
        ],
        icon: <Users className="w-5 h-5" />
      },
      {
        category: '智能体创业公司代表',
        members: ['易术科技：张凯（COO/联合创始人）、技术负责人leo'],
        icon: <FileText className="w-5 h-5" />
      }
    ]
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">正在加载青岛AI会议调研报告...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={yishuLogo} 
                alt="易术研究" 
                className="h-12 md:h-16 w-auto object-contain"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  青岛市政研室×智能体创业公司调研会
                </h1>
                <p className="text-sm md:text-base text-gray-600 mt-1">
                  青岛市AI智能体产业发展调研建议（政府侧参考版）
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>2024年调研报告</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Meeting Background */}
        <Card className="mb-8 shadow-lg border-blue-200 hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-xl">
              <FileText className="w-6 h-6" />
              会议背景与目的
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed mb-6 text-base">
              {meetingDetails.background}
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              与会人员构成
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {meetingDetails.participants.map((group, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-200 hover:shadow-md">
                  <h4 className="font-medium text-blue-700 mb-3 flex items-center gap-2">
                    {group.icon}
                    {group.category}
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {group.members.map((member, memberIndex) => (
                      <li key={memberIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <Card key={section.id} className="shadow-lg border-blue-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardHeader 
                className={`bg-gradient-to-r ${section.color} text-white cursor-pointer hover:brightness-110 transition-all duration-200`}
                onClick={() => toggleSection(section.id)}
              >
                <CardTitle className="flex items-center justify-between text-xl">
                  <div className="flex items-center gap-2">
                    {section.icon}
                    {section.title}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-white hover:bg-white/20 transition-colors duration-200"
                  >
                    {expandedSections[section.id] ? 
                      <ChevronUp className="w-5 h-5" /> : 
                      <ChevronDown className="w-5 h-5" />
                    }
                  </Button>
                </CardTitle>
              </CardHeader>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedSections[section.id] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {section.content.map((item, index) => (
                      <div key={index} className="animate-fadeIn">
                        {typeof item === 'string' ? (
                          <p className="text-gray-700 leading-relaxed text-base">{item}</p>
                        ) : (
                          <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-400">
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg">{item.subtitle}</h4>
                            <ul className="space-y-3 ml-4">
                              {item.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="text-gray-700 leading-relaxed flex items-start">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">推动青岛AI产业发展</h3>
            <p className="text-blue-100 mb-6 text-lg">
              让我们共同努力，将青岛打造成为AI智能体产业的重要基地
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <ExternalLink className="w-4 h-4 mr-2" />
                了解更多
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                联系我们
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-12 text-center py-8 border-t border-blue-200">
          <div className="flex flex-col items-center gap-4">
            <img 
              src={yishuLogo} 
              alt="易术研究" 
              className="h-8 w-auto object-contain opacity-70"
            />
            <p className="text-gray-600 text-sm">
              © 2024 青岛市政研室×智能体创业公司调研会 | 易术研究
            </p>
            <p className="text-gray-500 text-xs">
              本报告基于实地调研和深度访谈，为政府决策提供参考依据
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

