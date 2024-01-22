import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Text from './components/Text'

export default function App() {
  const printRef = useRef<HTMLDivElement>(null)
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  })
  return (
    <div className="flex items-center justify-center min-h-[100dvh] bg-slate-300  gap-2">
      <div className="w-[300px]">
        <Text text="STEP1：找出你最想問這本書的一個問題" delay={150} />
        <br />
        <Text text="STEP2：限時30分鐘快速摘出16個關鍵字" delay={150} />
        <br />
        <Text text="STEP3：針對這16個關鍵字，整理出3到5個重點" delay={150} />
        <br />
        <Text text="STEP4：複述心得" delay={150} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div ref={printRef}>
          <div className="grid bg-white grid-cols-5 w-[800px] h-[500px]  rounded-lg grid-rows-5 p-4 gap-2">
            <div className="col-span-3 space-y-0.5">
              <div className="flex items-center gap-2">
                <Label className="w-12" htmlFor="book">
                  書名
                </Label>
                <Input id="book" />
              </div>
              <div className="flex items-center gap-2">
                <Label className="w-12" htmlFor="question">
                  問題
                </Label>
                <Input id="question" />
              </div>
              <div className="flex items-center gap-2">
                <Label className="w-12" htmlFor="motivation">
                  動機
                </Label>
                <Input id="motivation" />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                <Label className="w-12" htmlFor="mainPoint">
                  要點
                </Label>
                <Textarea id="mainPoint" className="resize-none" />
              </div>
            </div>
            <div className="row-start-2 col-start-5 row-span-2 flex gap-2 flex-col  ">
              <Label className="w-12" htmlFor="aware">
                察覺點
              </Label>
              <Textarea id="aware" className="resize-none flex-1 " />
            </div>
            <div className="row-start-4 col-start-5 row-span-2 flex gap-2 flex-col   ">
              <Label className="w-12" htmlFor="summarize">
                總結
              </Label>
              <Textarea id="summarize" className="resize-none flex-1 " />
            </div>
            {Array(16)
              .fill('')
              .map((_, index) => (
                <Textarea key={index} className="resize-none" />
              ))}
          </div>
        </div>
        <Button onClick={handlePrint}>列印</Button>
      </div>
    </div>
  )
}
