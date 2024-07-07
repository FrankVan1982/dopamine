import { IMock, Mock, Times } from 'typemoq';
import { ManageAlbumsComponent } from './manage-albums.component';
import { IndexingServiceBase } from '../../../../services/indexing/indexing.service.base';
import { SettingsBase } from '../../../../common/settings/settings.base';

describe('ManageAlbumsComponent', () => {
    let settingsMock: IMock<SettingsBase>;
    let indexingServiceMock: IMock<IndexingServiceBase>;

    let component: ManageAlbumsComponent;

    beforeEach(() => {
        settingsMock = Mock.ofType<SettingsBase>();
        indexingServiceMock = Mock.ofType<IndexingServiceBase>();

        component = new ManageAlbumsComponent(settingsMock.object, indexingServiceMock.object);
    });

    describe('constructor', () => {
        it('should create', () => {
            // Arrange

            // Act

            // Assert
            expect(component).toBeDefined();
        });

        it('should define settings', () => {
            // Arrange

            // Act
            const manageAlbumCoversComponent: ManageAlbumsComponent = new ManageAlbumsComponent(
                settingsMock.object,
                indexingServiceMock.object,
            );

            // Assert
            expect(manageAlbumCoversComponent.settings).toBeDefined();
        });
    });

    describe('refreshAllCoversAsync', () => {
        it('should index artwork only, for all albums', () => {
            // Arrange

            // Act
            component.refreshAllCovers();

            // Assert
            indexingServiceMock.verify((x) => x.indexAlbumArtworkOnly(false), Times.exactly(1));
        });
    });

    describe('refreshMissingCoversAsync', () => {
        it('should index artwork only, for albums with missing covers', () => {
            // Arrange

            // Act
            component.refreshMissingCovers();

            // Assert
            indexingServiceMock.verify((x) => x.indexAlbumArtworkOnly(true), Times.exactly(1));
        });
    });
});
