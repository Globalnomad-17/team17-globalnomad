import { useMyActivitiesCheck } from "@/service/myActivities/useMyActivitiesService";
import StatusCalendar from "./StatusCalendar";
import Image from "next/image";
import NoReservation from "../../../public/icons/noReservation.svg";

const ReservationStatus = () => {
  const { data: list } = useMyActivitiesCheck();

  return (
    <div className="flex w-[792px] flex-col gap-[30px] ">
      {list && list.data.activities.length > 0 ? (
        <div>
          <div className="flex w-full flex-col gap-[42px]">
            <h1 className="text-[32px] font-bold">예약 현황</h1>
            <div className="relative">
              <label
                htmlFor="activity-select"
                className="absolute -top-2 left-3 bg-white px-1 text-sm font-normal"
              >
                체험명
              </label>
              <select
                id="activity-select"
                className="h-14 w-full rounded border border-gnGray700"
              >
                {list.data.activities.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <StatusCalendar />
        </div>
      ) : (
        <div className="flex flex-col gap-20">
          <h1 className="text-[32px] font-bold">예약 현황</h1>
          <div className="flex flex-col items-center gap-5">
            <Image
              src={NoReservation}
              alt="no-reservation"
              width={240}
              height={240}
              priority
            />
            <p className="text-2xl font-medium text-gnGray700">
              아직 등록한 체험이 없어요.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationStatus;