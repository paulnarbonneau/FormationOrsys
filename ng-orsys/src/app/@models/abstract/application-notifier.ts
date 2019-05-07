import { GlobalRootInjector } from '../../main/main.injector';
import { NotifierService } from '../../@services/notifier.service';

export abstract class ApplicationNotifier {
    notifier = GlobalRootInjector().get(NotifierService)
}
