import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function SidebarAccordion(items) {


  return (
    <>
      {/*<Accordion type="single" collapsible>*/}
      {/*  {items.map(function (item) {*/}
      {/*    return (*/}
      {/*      <AccordionItem value={item.id.toString()}>*/}
      {/*        <AccordionTrigger className="sidebar-title">*/}
      {/*          <div className="flex items-center gap-4">*/}
      {/*            <div className="sidebar-icon">{item.icon}</div>*/}
      {/*            <p className={`${activeSidebar ? 'hidden' : ''}`}>{item.category}</p>*/}
      {/*          </div>*/}
      {/*        </AccordionTrigger>*/}
      {/*        <AccordionContent className={`${activeSidebar ? 'hidden' : ''}`}>*/}
      {/*          {item.subcategories?.map(function (subcategory) {*/}
      {/*            return (*/}
      {/*              <div key={subcategory.id} className="ps-10">*/}
      {/*                <Link href={subcategory?.link}>*/}
      {/*                  <p className="sidebar-subtitle">{subcategory.name}</p>*/}
      {/*                </Link>*/}
      {/*              </div>*/}
      {/*            );*/}
      {/*          })}*/}
      {/*        </AccordionContent>*/}
      {/*      </AccordionItem>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</Accordion>*/}
    </>
  )
}
