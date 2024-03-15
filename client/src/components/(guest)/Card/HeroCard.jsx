import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/(guest)/ui/card";


export default function HeroCard({name, description}) {
  return (
    <>
      <Card
        className="border-2 hover:border-primary-purple hover:shadow-md hover:shadow-purple-200 transition-all duration-300 h-72 w-80">
        <CardHeader>
          <CardTitle className="text-[16px]">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 text-[14px] mt-8">{description}</p>
        </CardContent>
      </Card>
    </>
  )
}
